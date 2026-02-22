document.getElementById('screenInfoButton').addEventListener('click', () => {
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const windowInnerWidth = window.innerWidth;
    const windowInnerHeight = window.innerHeight;
    const devicePixelRatio = window.devicePixelRatio;

    const message = `Размеры экрана:
• Разрешение экрана: ${screenWidth} × ${screenHeight} px
• Размер окна браузера: ${windowInnerWidth} × ${windowInnerHeight} px
• Плотность пикселей (DPI): ${devicePixelRatio}`;

    alert(message);
});