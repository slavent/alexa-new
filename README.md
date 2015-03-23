# MyBoilerplate
For fast developing asaszievit


# Some usefull commands
1. open /Applications/Google\ Chrome.app --args --disable-web-security
2. browser-sync start --server --files "css/*.css"


# Some usefull links
1. http://momentjs.com/ - for date
2. http://fotorama.io/ - slider
3. http://dimsemenov.com/plugins/magnific-popup/ - popup
4. http://fancyapps.com/fancybox/ - popup
5. http://masonry.desandro.com/ - incredible grids
6. https://github.com/LPology/Simple-Ajax-Uploader - ajax uploader
7. http://sapegin.github.io/social-likes/ru/ - social buttons
8. http://ohmyz.sh/ - for command line
9. http://www.softmaker.kz/articles/raznoe/nastrojka-xampp-na-mac-os-x.html - XAMPP
10. http://www.mobilefish.com/services/base64/base64.php - compress svg
11. http://www.browsersync.io/#install - browser sync
12. http://www.smushit.com/ysmush.it/ - optimize img
13. http://onjee.ru/3-servisa-chtoby-proverit-skorost-zagruzki-sajta/ - speed of load
14. http://lorempixel.com/ - lorem pic
15. https://github.com/noraesae/perfect-scrollbar - good scrollbar
16. https://github.com/narfdotpl/jquery-typing - typing
17. http://naikom.ru/blog/archives/4168 - cirillic fonts
18. http://fronteed.com/iCheck/ - custom checkbox and radiobtn
18. http://caniuse.com/ - can i use
19. http://habrahabr.ru/post/252287/ - 22 photoshop plugins


# Books
1. http://largescalejs.ru/ - JS patterns(module, facade, mediator)
2. http://habrahabr.ru/post/132472/ - JS patterns


# Git
1. git status
2. git diff
3. git add .
4. git add -A
5. git commit -m "Some message"
6. git push origin master
7. git pull
8. git log
9. git remote
10. git remote add origin name_of_repo.git
11. git branch -r
12. git checkout some_branch
13. git checkout -b some_branch
14. git checkout --track -b some_branch origin/some_branch
15. git push origin :heads/new_branch_name - delete remote branch
16. git branch -d some_branch - delete local branch
17. git merge some_branch
18. git reset --hard
19. git stash
20. git stash pop
21. git clone nam_of_repo.git
22. git init

# Plugins for Brackets
1. Autoprefixer
2. Brackets color pallete
3. Brackets css color preview
4. Brackets icons
5. Code folding
6. Colorhints
7. CSSFier
8. Emmet
9. Everyscrub
10. Extract for brackets
11. Monokai Dark Soda
12. Quick search

# JS good practices: 
1. while ( length-- ) { ... код ... }
2. Переменные объявляются в одном месте, желательно в начале функции.
3. Глобальных переменных быть не должно, максимум одна.
4. 2 способа объявить глобальную переменную:
   - var a = 0; - в данном случае a - глобальная переменная.
   - a = 0; - в данном случае а - свойство глобального объекта window(в глобальном контексте this - window). Данное     свойство можно удалить delete a. Плюс при парсинге кода браузером данное свойство будет инициализированно   раньше, чем глобальная переменная в первом способе. 
5. Coffescript
6. Замыкание:

   var func1 = function(){
   
      var a = 10;
      
      return function(){
      
         return a;
         
      }
      
   };
   
   func1()(); // return 10
7. Режим "use strict" - режим строгой типизации
8. Именование переменных payment_val, 
   именование функций paymentCalc, 
   именование констант MAX_SIZE = 1000, 
   именование приватных переменных, методов _init.
