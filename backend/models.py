from django.db import models
from django.utils import timezone
from phonenumber_field.modelfields import PhoneNumberField
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, name, email,  contact, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            name=name,
            email=email,
            contact=contact,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, name, email, contact, password=None):
        user = self.create_user(
            name,
            email,
            contact,
            password=password,
        )

        user.is_staff = True
        user.is_vendor = True
        user.is_superuser = True
        user.set_password(password)
        user.save(using=self._db)

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    username = None
    name = models.CharField(max_length=255, unique=True)
    contact = PhoneNumberField(unique=True)
    email = models.EmailField(max_length=255, unique=True)
    joined = models.DateTimeField('date joined', default=timezone.now)

    city = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255, null=True)
    business = models.CharField(max_length=255, null=True)
    location = models.CharField(max_length=255, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    is_vendor = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'contact']

    def get_name(self):
        return self.name

    def get_contact(self):
        return self.contact

    def __str__(self):
        return self.email
