const table = document.querySelector('.products-table-body')

window.addEventListener('load' , function(){
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {
        console.log(data.data);
        let mainUser = data.data
         mainUser.forEach(function (user){
            table.insertAdjacentHTML('beforeend' , `
                <tr>
                   <td>${user.id}</td>
                   <td>${user.email}</td>
                   <td>${user.first_name}</td>
                   <td>${user.last_name}</td>
                   <td><img src= "${user.avatar}" style ="width:50px; height:50px; border-radius:50%;" </td>
                </tr>
                `)
            
        })
            
       
    })
})