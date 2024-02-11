//Var.jsx

//4
export function GeneratedOTP() {
    var key = '';
    var characters = '0123456789';
  
    // Generate 10 karakter acak
    for (var i = 0; i < 4; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return key;
}
//30
export function GeneratedHASH() {
    var key = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    // Generate 10 karakter acak
    for (var i = 0; i < 30; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return key;
}
//10
export function GeneratedID() {
    var key = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    // Generate 10 karakter acak
    for (var i = 0; i < 10; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return key;
}
//15
export function GeneratedADDRESS() {
    var key = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    // Generate 10 karakter acak
    for (var i = 0; i < 15; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return key;
}
//20
export function GeneratedKEY() {
    var key = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    // Generate 10 karakter acak
    for (var i = 0; i < 20; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return key;
}
//20
export function GeneratedTKN() {
    var key = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  
    // Generate 10 karakter acak
    for (var i = 0; i < 20; i++) {
      key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return key;
}

export  function TimeNow() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function getDeviceHeader() {
    var userAgent = navigator.userAgent;
    if (/Android/i.test(userAgent)) {
        return "Android";
    } else {
        return "Browser";
    }
}