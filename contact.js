function showData() {
    //DOM Mengambil Nilai
    let name = document.getElementById("input-name").value 
    let Email = document.getElementById("input-Email").value 
    let Phone = document.getElementById("input-Phone").value 
    let Subject = document.getElementById("input-Subject").value 
    let Message = document.getElementById("input-Message").value 
  

    //DOM Mengirim Nilai

    //validation    
     if (name == ""){
         alert('name input must not be empty')
     }
     if (Email == ""){
        alert('Email input must not be empty')
    }
    if (Phone == ""){
        alert('Phone input must not be empty')
    }
    if (Subject == ""){
        alert('Subject input must not be empty')
    }
    if (Message == ""){
        alert('Message input must not be empty')
    }

    // Email Procces
    //DOM Membuat Element
    let emailReceiver = 'ksinurat13@gmail.com'

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${Subject}&body=Hello my name is ${name}, ${Subject}, ${Message}, this is my phone ${Phone}. Please Contact me`

    a.click()
}
