# Git commands

"git clone <repo-url>" - клонує віддалений репозиторій тобі на комп'ютер
"code ." - відкриває VSCode в поточній директорії
"git status" - відображає поточний стан репозиторію
"git add ." - додає під контроль усі нові зміни в поточній директорії
"git commit -m <Your message>" - фіксує поточний стан файлів у локальному репозиторії
"git stash" - тимчасово зберігає незафіксовані зміни
"git push" - відправляє зафіксовані зміни у віддалений репозиторій

"git branch" - показує лише локальні гілки
"git branch -r" - показує лише віддалені гілки
"git branch -a" - показує усі гілки, як локальні так і віддалені

"git switch -c <name new branch>" - команда для створення нової гілки
"git switch <name branch>" - команда щоб перейти на іншу гілку

"git fetch" - завантажує останні зміни з віддаленого репозиторію, 
                але не вносить їх у поточні гілки. 
                Вона використовується для оновлення локальної інформації 
                про стан віддаленого репозиторію, але не змінює ваш робочий каталог

"git pull" - одночасно і завантажує, і вносить у локальний репозиторій усі останні 
                зміни (на усіх гілках), які були зроблені у віддаленому репозиторію. 
                Якщо потрібно завантажити зміни з певної гілки, то треба додати до команди 
                назву цієї гілки, наприклад, git pull origin footer

"git pull origin main" - завантажує останні зміни з віддаленого репозиторію main

"git switch main" - Переключись на гілку main
"git merge <name branch>" - Злиття гілки <name branch> з main
"git push origin main" - Ці дії об'єднають зміни з гілки <name branch> до гілки main і оновлять 
                        віддалений репозиторій з останнім станом гілки main

"git branch -d(D) <name branch>" - команда для видалення гілки, (-D — це примусове видалення)
"git push origin --delete <name branch>" - видалити віддалену гілку можна за допомогою команди

"git log" - для перегляду історії, щоб переконатися, що злиття було успішно здійснено
