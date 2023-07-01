from django.contrib import admin
from .models import Collaborators, Contacts, Subscribers, Slider




class ContactsAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'email', 'phone_number', 'created_at']
    search_fields = ['first_name', 'last_name']


class CollaboratorsAdmin(admin.ModelAdmin):
    list_display = ['name', 'logo', 'link', 'created_at']
    search_fields = ['name']


class SubscribersAdmin(admin.ModelAdmin):
    list_display = ['email', 'created_at']
    search_fields = ['email']


class SliderAdmin(admin.ModelAdmin):
    list_display = ['id', 'slider_header', 'slider_image', 'content', 'created_at']
    search_fields = ['slider_header']


admin.site.register(Collaborators, CollaboratorsAdmin)
admin.site.register(Subscribers, SubscribersAdmin)
admin.site.register(Contacts, ContactsAdmin)
admin.site.register(Slider, SliderAdmin)
