from django.db import models
from services.mixins import DateMixin
from services.uploader import Uploader



class Collaborators(DateMixin):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to=Uploader.collaborators_logo)
    link = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Collaborator"
        verbose_name_plural = "Collaborators"



class Subscribers(DateMixin):
    email = models.EmailField(max_length=254)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = "Subscriber"
        verbose_name_plural = "Subscribers"


class Contacts(DateMixin):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone_number = models.CharField(max_length=255)
    whycontactus = models.TextField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


    class Meta:
        verbose_name = "Contact"
        verbose_name_plural = "Contacts"


class Slider(DateMixin):
    slider_image = models.ImageField()
    slider_header = models.CharField(max_length=255)
    content = models.CharField(max_length=255)

    def __str__(self):
        return self.slider_header
