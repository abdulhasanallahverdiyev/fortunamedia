from rest_framework import serializers
from .models import LastWorks, PackageProperties, Packages, Services


# Services Serializer
class ServicesReadSerializers(serializers.ModelSerializer):
    services_last_works = serializers.SerializerMethodField()
    services_package = serializers.SerializerMethodField()

    class Meta:
        model = Services
        fields = ['id', 'name', 'logo', 'services_last_works', 'services_package', 'created_at', 'updated_at']

    def get_services_last_works(self, obj):
        serializer = LastWorksREADSerializers(obj.services_last_works.all(), many=True)
        return serializer.data

    def get_services_package(self, obj):
        serializer = PackagesREADSerializers(obj.services_package.all(), many=True)
        return serializer.data


class ServicesCREATESerializers(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ['id', 'name', 'logo']


# LastWorks Serializer
class LastWorksREADSerializers(serializers.ModelSerializer):
    service = ServicesCREATESerializers()

    class Meta:
        model = LastWorks
        fields = ['id', 'project_name', 'proje_link', 'proje_photo', 'is_finish', 'service', 'created_at', 'updated_at']


class LastWorksCREATESerializers(serializers.ModelSerializer):
    class Meta:
        model = LastWorks
        fields = ['project_name', 'proje_link', 'proje_photo', 'is_finish', 'service']


# Packages Serializer
class PackagesREADSerializers(serializers.ModelSerializer):
    service = ServicesCREATESerializers()
    package_property = serializers.SerializerMethodField()

    class Meta:
        model = Packages
        fields = ['package_name', 'price_period', 'price', 'package_property', 'service', 'created_at', 'updated_at']

    def get_package_property(self, obj):
        serializer = PackagePropertiesSerializers(obj.package_property.all(), many=True)
        return serializer.data


class PackagesCREATESerializers(serializers.ModelSerializer):
    class Meta:
        model = Packages
        fields = ['package_name', 'price_period', 'price', 'service',  'created_at', 'updated_at']


# Package Properties Serializer
class PackagePropertiesSerializers(serializers.ModelSerializer):
    class Meta:
        model = PackageProperties
        fields = ['property', 'package']
