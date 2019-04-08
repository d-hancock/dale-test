# README #

Team 201 Test

### Installation ###

Clone into the repo and create the virtual environment of your choice. Change directories into dale-test. run pip install requirements.txt and then npm install.

From there run create a database titled "ExamDataBase" on your local PostgreSQL server run on port 5433. Create a username either titled "ExamDatabaseOwner" or one of your choosing. Then run "psql -U 'username' 'db_name' < dbexport.pgsql" to recreate the testing database.

From here run python manage.py makemigrations and migrate then runserver in dale-test/backend/CodingTest. Next navigate to dale-test/frontend/gui and run npm start. 

