const img = document.getElementById('responsive-image');

// ฟังก์ชันซูมเข้าและออกเมื่อคลิกที่รูปภาพ
img.addEventListener('click', () => {
    if (img.style.transform === 'scale(1.5)') {
        img.style.transform = 'scale(1)';
    } else {
        img.style.transform = 'scale(1.5)';
    }
});
