from django.db import models
from services.mixins import DateMixin
from services.uploader import Uploader


class Services(DateMixin):
    name = models.CharField(max_length=255)
    logo = models.ImageField(upload_to=Uploader.services_image)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Service"
        verbose_name_plural = "Services"


class LastWorks(DateMixin):
    project_name = models.CharField(max_length=255)
    proje_link = models.URLField(max_length=200)
    proje_photo = models.ImageField(upload_to=Uploader.services_last_work_image)
    is_finish = models.BooleanField(default=False)
    service = models.ForeignKey(Services, on_delete=models.CASCADE, related_name='services_last_works')

    def __str__(self):
        return self.project_name

    class Meta:
        verbose_name = "Last Work"
        verbose_name_plural = "Last Works"


class Packages(DateMixin):
    package_name = models.CharField(max_length=255)
    price_period = models.CharField(max_length=10)
    price = models.FloatField()
    service = models.ForeignKey(Services, on_delete=models.CASCADE, related_name='services_package')

    def __str__(self):
        return f"{self.service.name} - {self.package_name}"

    class Meta:
        verbose_name = "Package"
        verbose_name_plural = "Packages"


class PackageProperties(DateMixin):
    property = models.CharField(max_length=255)
    package = models.ForeignKey(Packages, on_delete=models.CASCADE, related_name='package_property')

    def __str__(self):
        return f"{self.package.package_name} - {self.property}"

    class Meta:
        verbose_name = "Package Property"
        verbose_name_plural = "Package Properties"

