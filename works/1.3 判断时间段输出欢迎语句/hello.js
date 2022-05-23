        now = new Date(),hour = now.getHours()
        if(hour < 6){document.write("凌晨好鸭，感谢友友阅读！")}
        else if (hour < 9){document.write("早上好鸭，感谢友友阅读！")}
        else if (hour < 12){document.write("上午好鸭，感谢友友阅读！")}
        else if (hour < 14){document.write("中午好鸭，感谢友友阅读！")}
        else if (hour < 17){document.write("下午好鸭，感谢友友阅读！")}
        else if (hour < 19){document.write("傍晚好鸭，感谢友友阅读！")}
        else if (hour < 22){document.write("晚上好鸭，感谢友友阅读！")}
        else {document.write("夜里好鸭，感谢友友阅读！")}
