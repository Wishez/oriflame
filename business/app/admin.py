# -*- encoding: utf-8 -*-
from django.contrib import admin
from .models import *

class UserAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('last_name', 'first_name', 'middle_name', 'consultant_num', 'phone_number', 'email', 'status',)
    date_hierarchy = 'registered_date'
    filter_fields = ('registered_date', 'status', 'last_name', 'first_name', 'middle_name', 'citizenship', 'city', 'region',)
    search_fields = (
        'last_name',
        'first_name',
        'middle_name',
        'city',
        'region',
        'consultant_num',
        'passport_data',
        'birthday',
        'street',
        'num_home',
        'num_apartment',
        'email',
        'phone_number',
    )
    fieldsets = (
        ('Основная информация', {
            'fields': (
                ('first_name', 'last_name', 'middle_name',),
                ('birthday', 'citizenship',),
            ),
        },),
        ('Личные данные', {
            'fields': (
                ('passport_data',),
                ('phone_number', 'email',),
                ('city', 'region',),
                ('street', 'num_home', 'num_apartment',),
            ),
        },),
        ('Данные консультанта', {
            'fields': (
                ('consultant_num', 'status',),
                ('registered_date',),
            ),
        },),
    )
class ShareAdmin(admin.ModelAdmin):
    list_per_page = 10
    list_display = ('title', 'published_date',)
    date_hierarchy = 'published_date'
    filter_fields = ('published_date', 'title',)
    search_fields = ('published_date', 'title',)

class CustomAdmin(admin.ModelAdmin):
    pass

# Register your models here.
admin.site.register(Share, ShareAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Custom, CustomAdmin)