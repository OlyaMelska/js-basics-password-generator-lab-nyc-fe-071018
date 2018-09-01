window.addEventListener("load", () => {
  
    document.addEventListener('submit', (event) => {
        event.preventDefault()
        const input = document.getElementById('passwordlenght')
        let passwordlenght = input.value
        let result = document.getElementById('result');
        let outputResult = document.getElementById('output')
        let lowercase = "abcdefghijklmnopqrstuvwxyz".split('')
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let specialCharacters = "!#$%&()*+,-./:;<=>?@[\\]^_{|}~".split('')


        if (passwordlenght >= 4) {
            let password = "";

            for(let i=0; i<passwordlenght; ){
              if(i < passwordlenght){
                password += lowercase[Math.floor(Math.random() * lowercase.length)]
                i++;
              }
              if(i < passwordlenght){
                password += uppercase[Math.floor(Math.random() * uppercase.length)]
                i++;
              }
              if(i < passwordlenght){
                password += numbers[Math.floor(Math.random() * numbers.length)]
                i++;
              }
              if(i < passwordlenght){
                password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
                i++;
              }
              
            }

            console.log(password)
            
            let shufflePassword = ''
            
            for(let i = 0; i<passwordlenght; i++){
              let b = Math.floor(Math.random() * passwordlenght)
              shufflePassword[i] = password[b]
            }
            console.log(shufflePassword)
            result.innerHTML = '<p>' + shufflePassword + '</p>'


        }
        else if (passwordlenght < 4) {
            result.innerHTML = '<p>Lenght should be at least 4 symbols!!!</p>'
        }
        else{
          result.innerHTML = '<p>Only numbers! No other symbols allowed</p>'
        }

    })

});

function randomNumber(array) {
    let index = Math.floor(Math.random() * array.length)
    return index;
}
