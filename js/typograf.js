/**
 * Типограф — убирает висячие предлоги
 * Заменяет пробелы после коротких слов на неразрывные
 */
(function() {
    'use strict';

    // Предлоги, союзы и короткие слова, после которых нельзя переносить
    const shortWords = [
        // Предлоги
        'в', 'на', 'с', 'к', 'у', 'о', 'а', 'и', 'но', 'за', 'по', 'из', 'до', 'от',
        'для', 'без', 'при', 'под', 'над', 'про', 'об', 'со', 'ко', 'во', 'же',
        // Частицы
        'не', 'ни', 'бы', 'ли', 'ведь', 'вот', 'вон', 'даже', 'лишь',
        // Союзы
        'то', 'как', 'так', 'что', 'или', 'либо',
        // Местоимения
        'я', 'мы', 'вы', 'он', 'её', 'ее', 'их',
        // Числительные
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ];

    // Создаём регулярное выражение
    // Ищем: (начало строки или пробел)(короткое слово)(пробел)
    const pattern = new RegExp(
        '(^|\\s)(' + shortWords.join('|') + ')(\\s)',
        'gi'
    );


    /**
     * Обрабатывает текстовый узел
     */
    function processTextNode(textNode) {
        const text = textNode.nodeValue;
        if (!text || !text.trim()) return;

        // Заменяем обычный пробел после короткого слова на неразрывный
        const newText = text.replace(pattern, '$1$2\u00A0');

        if (newText !== text) {
            textNode.nodeValue = newText;
        }
    }

    /**
     * Рекурсивно обходит DOM и обрабатывает текстовые узлы
     */
    function processElement(element) {
        // Пропускаем скрипты, стили и другие служебные элементы
        const skipTags = ['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'CODE', 'PRE'];
        if (skipTags.includes(element.tagName)) return;

        const childNodes = Array.from(element.childNodes);

        childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                processTextNode(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                processElement(node);
            }
        });
    }

    /**
     * Запускает типограф на всей странице
     */
    function run() {
        processElement(document.body);
    }

    // Запускаем при загрузке DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }

    // Экспортируем функцию для возможного повторного вызова
    window.typograf = { run: run };
})();
