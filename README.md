# django-drf-react-quickstart
Django REST framework / React quickstart

# The following repo is no longer maintained and should be taken only as a loose guideline for structuring your Django/React project. Please check out [django-rest-react-pycon](https://github.com/valentinogagliardi/django-rest-react-pycon) for a more recent version.

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

![Django REST framework React](https://www.valentinog.com/blog/wp-content/uploads/2018/01/django-rest-framework-react.png)

## Development

* Install Python dependencies: `pipenv install`
* Install Javascript dependencies: `npm i`
* Make the bundle: `npm run dev`
* Migrate: `pipenv run python ./project/manage.py migrate`
* Populate the database: `pipenv run python ./project/manage.py loaddata leads`
* Run locally: `pipenv run python ./project/manage.py runserver`
* Head over http://127.0.0.1:8000/

## Test

* Unit: `cd project && pipenv run python manage.py test`
* E2E: `npm run e2e`
* Coverage: `cd project && pipenv run coverage run manage.py test`

## Production

* Make the bundle: `npm run build`
* ... TODO

## TODO

* Authentication
* React routing
* Production

## Meta

Valentino Gagliardi - [valentinog.com](https://www.valentinog.com) - valentino@valentinog.com


