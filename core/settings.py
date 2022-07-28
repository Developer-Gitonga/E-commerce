import os
import mimetypes
import cloudinary
import django_heroku
import cloudinary.api
import cloudinary.uploader
from datetime import timedelta
from os.path import join, dirname, abspath
from dotenv import load_dotenv, find_dotenv


mimetypes.add_type("text/css", ".css", True)
mimetypes.add_type("application/javascript", ".js", True)

load_dotenv(find_dotenv())

BASE_DIR = dirname(dirname(abspath(__file__)))

SECRET_KEY = os.environ.get('SECRET_KEY')

DEBUG = True

ALLOWED_HOSTS = ['*']

CORS_ALLOW_HEADERS = ['*']

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_ALL_ORIGINS = True

CORS_ORIGIN_WHITELIST = ('https://fichuastore.herokuapp.com',
                         'https://fichua.vercel.app', 'https://fichuastore.vercel.app')

INSTALLED_APPS = [
    'rest_framework',
    'rest_framework_simplejwt.token_blacklist',
    'rest_framework_simplejwt',
    'phonenumber_field',
    'corsheaders',
    'cloudinary',
    'drf_yasg',
    'ckeditor',
    'djoser',
    'backend',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('DB_NAME'),
        'USER': os.environ.get('DB_USER'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'HOST': os.environ.get('DB_HOST'),
        'PORT': os.environ.get('DB_PORT'),
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    'ACCESS_TOKEN_LIFETIME': timedelta(days=3),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=5),
    'AUTH_TOKEN_CLASSES': (
        'rest_framework_simplejwt.tokens.AccessToken',
    )
}

DJOSER = {
    'LOGIN_FIELD': 'email',
    'USER_CREATE_PASSWORD_RETYPE': True,
    'USERNAME_CHANGED_EMAIL_CONFIRMATION': True,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION': True,
    'SEND_CONFIRMATION_EMAIL': True,
    'SET_USERNAME_RETYPE': True,
    'SET_PASSWORD_RETYPE': True,
    'PASSWORD_RESET_CONFIRM_URL': 'password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': 'email/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': 'activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': True,
    'SOCIAL_AUTH_TOKEN_STRATEGY': 'djoser.social.token.jwt.TokenStrategy',
    'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': ['http://localhost:8000/google', 'http://localhost:8000/facebook'],
    'SERIALIZERS': {
        'user_create': 'backend.serializers.UserCreateSerializer',
        'user': 'backend.serializers.UserCreateSerializer',
        'current_user': 'backend.serializers.UserCreateSerializer',
        'user_delete': 'djoser.serializers.UserDeleteSerializer',
    }
}


EMAIL_PORT = os.environ.get('EMAIL_PORT')

EMAIL_HOST = os.environ.get('EMAIL_HOST')

EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS')

EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')

EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')

SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = '[YOUR GOOGLE OAUTH2 API KEY]'

SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = '[YOUR GOOGLE OAUTH2 API SECRET]'

SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = ['https://www.googleapis.com/auth/userinfo.email',
                                   'https://www.googleapis.com/auth/userinfo.profile', 'openid']
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ['first_name', 'last_name']

SOCIAL_AUTH_FACEBOOK_KEY = '[YOUR FACEBOOK API KEY]'

SOCIAL_AUTH_FACEBOOK_SECRET = '[YOUR FACEBOOK API SECRET]'

SOCIAL_AUTH_FACEBOOK_SCOPE = ['email']

SOCIAL_AUTH_FACEBOOK_PROFILE_EXTRA_PARAMS = {
    'fields': 'email, first_name, last_name'
}

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': None,
    },
}

cloudinary.config(
    cloud_name=os.environ.get('CLOUDINARY_NAME'),
    api_key=os.environ.get('CLOUDINARY_API_KEY'),
    api_secret=os.environ.get('CLOUDINARY_API_SECRET')
)

MEDIA_URL = 'media/'

STATIC_URL = '/static/'

STATIC_ROOT = join(BASE_DIR, 'staticfiles')

STATIC_FILES_DIRS = [join(BASE_DIR, 'build/static')],

MEDIA_ROOT = join(BASE_DIR, 'media')

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Nairobi'

USE_L10N = True

USE_I18N = True

USE_TZ = True

ACCOUNT_UNIQUE_EMAIL = True

PHONENUMBER_DEFAULT_REGION = 'KE'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

AUTH_USER_MODEL = 'backend.UserAccount'

django_heroku.settings(locals())
