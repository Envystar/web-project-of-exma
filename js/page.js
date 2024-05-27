function animotion() {
    var boxElements = document.querySelectorAll('.main-table-content');
    var textElements = document.querySelectorAll('.table-content-text');
    var imgElements = document.querySelectorAll('.table-content-img img');
    textElements.forEach(function(textElement, index) {
        var childElement = textElement.querySelector('h2');
        var computedStyle = window.getComputedStyle(childElement); // 获取计算后的样式
        var marginTop = parseInt(computedStyle.getPropertyValue('margin-top')); // 获取上边距
        var marginBottom = parseInt(computedStyle.getPropertyValue('margin-bottom')); // 获取下边距

        var init = childElement.offsetHeight + marginTop + marginBottom;
        var tar = parseInt(textElement.offsetHeight);
        var curImg = imgElements[index];
        var curbox = boxElements[index];

        textElement.style.bottom = init + 'px';
        textElement.style.height = init + 'px';
        textElement.style.marginBottom = -init + 'px';
        textElement.addEventListener('mouseover', function() {
            curImg.style.transform = 'scale(1.1)';
            textElement.style.bottom = tar + 'px';
            textElement.style.height = tar + 'px';
            textElement.style.marginBottom = -tar + 'px';
            curbox.style.boxShadow = '0px 0px 15px #ffffff';
        });
        textElement.addEventListener('mouseout', function() {
            curbox.style.boxShadow = 'none'
            textElement.style.marginBottom = -init + 'px';
            textElement.style.height = init + 'px';
            textElement.style.bottom = init + 'px';
            curImg.style.transform = 'scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded',animotion);