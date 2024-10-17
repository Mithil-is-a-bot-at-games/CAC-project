window.onload = function(){
    firebase.initializeApp(firebaseConfig);
    var db = firebase.database()

    class bridge{
        home(){
            document.body.innerHTML = ''
            this.create_title()
            this.create_join_form()

        }
        chat(){
            this.create_title()
            this.create_chat()
        }
        create_title(){
            var title_container = document.createElement('div')
            title_container.setAttribute('id', 'title_container')
            var title_inner_container = document.createElement('div')
            title_inner_container.setAttrbute('id','title_inner_container')
            var title = document.createElement('h1')
            title.setAttribute('id', 'title')
            title.textContent = 'B.R.I.D.G.E'
            title_inner_container.append(title)
            title_container.append(title_inner_container)
            document.body.append(title_container)

        }
        create_join_form(){
            var join_container = document.createElement('div')
            join_container.setAttribute('id', 'join_container')
            var join_inner_container = document.createElement('div')
            join_inner_container.setAttribute('id', 'join_inner_container')
            var join_button_container = document.createElement('div')
            join_button_container.setAttribute('id', 'join_button_container')
            var join_input = document.createElement('input')
            join_input.setAttribute('id', 'join_input')
            join_input.setAttribute('maxlength', 15)
            join_input.placeholder = 'No.... It\'s Patrick Star'
      


        }
    }

}
