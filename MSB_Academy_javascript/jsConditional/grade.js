function grade(markes) {
    if (markes >= 80 && markes <= 100) {
        return 'A+';
        
    }
    else if (markes <= 79 && markes >= 70) {
        return 'A';
        
    }
    else if (markes <= 69 && markes >= 60) {
        return 'A-';
        
    }
    else if (markes <= 59 && markes >= 50) {
        return 'B';
        
    }
    else if (markes <= 49 && markes >= 40) {
        return 'C';
        
    }
    else if (markes >= 33 && markes <= 39) {
        return 'D';
        
    }
    else if (markes <= 32 && markes >= 0) {
        return 'F';
        
    } else {
        return 'give a right number'
    }
}
console.log(grade(20));