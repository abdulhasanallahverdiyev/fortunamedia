from django.urls import path
from .views import LastWorksReadUpdateDeleteView, LastWorksView, PackagePropertiesView, PackagesReadUpdateDeleteView, PackagesView, ServicesReadUpdateDeleteView, ServicesView


urlpatterns = [
    path('services/', ServicesView.as_view(), name='services'),
    path('services/<int:pk>', ServicesReadUpdateDeleteView.as_view(), name='services'),

    path('last_works/', LastWorksView.as_view(), name='last_works'),
    path('last_works/<int:pk>', LastWorksReadUpdateDeleteView.as_view(), name='last_works'),

    path('package/', PackagesView.as_view(), name='package'),
    path('package/<int:pk>', PackagesReadUpdateDeleteView.as_view(), name='package'),

    path('package_property/', PackagePropertiesView.as_view(), name='package_property'),
]

