from django.contrib import admin
from .models import LastWorks, PackageProperties, Packages, Services


class ServicesAdmin(admin.ModelAdmin):
    list_display = ['name', 'logo', 'created_at', 'updated_at']
    search_fields = ['name']


class LastWorksAdmin(admin.ModelAdmin):
    list_display = ['project_name', 'proje_link', 'proje_photo', 'service', 'is_finish', 'created_at', 'updated_at']
    search_fields = ['project_name']
    list_filter = ['is_finish']


class PackagesAdmin(admin.ModelAdmin):
    list_display = ['package_name', 'price_period', 'price', 'service', 'created_at', 'updated_at']
    search_fields = ['package_name']


class PackagePropertiesAdmin(admin.ModelAdmin):
    list_display = ['property', 'package', 'created_at', 'updated_at']
    search_fields = ['property']


admin.site.register(Services, ServicesAdmin)
admin.site.register(LastWorks, LastWorksAdmin)
admin.site.register(Packages, PackagesAdmin)
admin.site.register(PackageProperties, PackagePropertiesAdmin)

