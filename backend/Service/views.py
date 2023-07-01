import django_filters.rest_framework
from rest_framework import filters
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import LastWorks, PackageProperties, Packages, Services
from .serializers import (
    LastWorksCREATESerializers,
    LastWorksREADSerializers,
    PackagePropertiesSerializers,
    PackagesCREATESerializers,
    PackagesREADSerializers,
    ServicesCREATESerializers,
    ServicesReadSerializers)



class GenericAPIViewSerializerMixin:
    def get_serializer_class(self):
        return self.serializer_classes[self.request.method]


# Services GET & POST

class ServicesView(GenericAPIViewSerializerMixin, ListCreateAPIView):
    queryset = Services.objects.all()
    serializer_classes = {
        'GET' : ServicesReadSerializers,
        'POST' : ServicesCREATESerializers
    }

# Services GET & PUT & PATCH & DELETE

class ServicesReadUpdateDeleteView(GenericAPIViewSerializerMixin, RetrieveUpdateDestroyAPIView):
    queryset = Services.objects.all()
    serializer_classes = {
        'GET' : ServicesReadSerializers,
        'PUT' : ServicesCREATESerializers,
        'PATCH' : ServicesCREATESerializers
    }


# LastWorks GET & POST

class LastWorksView(GenericAPIViewSerializerMixin, ListCreateAPIView):
    queryset = LastWorks.objects.all()
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['service', 'is_finish']
    search_fields = ['project_name']
    serializer_classes = {
        'GET' : LastWorksREADSerializers,
        'POST' : LastWorksCREATESerializers
    }

# LastWorks GET & PUT & PATCH & DELETE
class LastWorksReadUpdateDeleteView(GenericAPIViewSerializerMixin, RetrieveUpdateDestroyAPIView):
    queryset = LastWorks.objects.all()
    serializer_classes = {
        'GET' : LastWorksREADSerializers,
        'PUT' : LastWorksCREATESerializers,
        'PATCH' : LastWorksCREATESerializers
    }


# LastWorks GET & POST

class PackagesView(GenericAPIViewSerializerMixin, ListCreateAPIView):
    queryset = Packages.objects.all()
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['service']
    search_fields = ['package_name']
    serializer_classes = {
        'GET' : PackagesREADSerializers,
        'POST' : PackagesCREATESerializers
    }

# LastWorks GET & PUT & PATCH & DELETE
class PackagesReadUpdateDeleteView(GenericAPIViewSerializerMixin, RetrieveUpdateDestroyAPIView):
    queryset = Packages.objects.all()
    serializer_classes = {
        'GET' : PackagesREADSerializers,
        'PUT' : PackagesCREATESerializers,
        'PATCH' : PackagesCREATESerializers
    }


class PackagePropertiesView(ListCreateAPIView):
    queryset = PackageProperties.objects.all()
    serializer_class = PackagePropertiesSerializers












