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
    list_per_page = 10
    list_display = ('name', 'title', 'is_active',)
    filter_fields = (
    'name', 'title', 'is_active',)
    fieldsets = (
        ('Данные настроек сайта', {
            'fields': (
                ('name', 'is_active',),
            ),
        },),
        ('Настройка информации сайта', {
            'fields': (
                ('widgets',),
                ('description', 'title',),
            ),
        },),
        ('Настройка контактной информации', {
            'fields': (
                ('email', 'phone',),
                ('address', 'addressHref',),
            ),
        },),
        ('Базовая настройка', {
            'fields': (
                ('default_color', 'default_bg',),
                ('default_link_color', 'default_link_hover_color',),
                ('preloader_color', 'curtain_bg',),
            ),
        },),
        ('Шапка сайта', {
            'fields': (
                ('header_color', 'header_bg', 'headings_color',),
                ('menu_link_color', 'menu_link_hover_color', 'menu_link_active_color',),
                ('menu_link_hover_bg',),
                ('open_menu_button_bg', 'open_menu_button_color',),
                ('close_menu_button_color',),
            ),
        },),
        ('Слайдер', {
            'fields': (
                ('slider_buttons_color', 'slider_buttons_bg',),
            ),
        },),
        ('Регистрация', {
            'fields': (
                ('checkbox_field_color', 'checkbox_field_bg',),
            ),
        },),
        ('Кнопки', {
            'fields': (
                ('button_bg', 'button_hover_bg',),
                ('button_color', 'button_hover_color',),
            ),
        },),
        ('Нижняя часть сайта', {
            'fields': (
                ('footer_color', 'footer_bg',),
            ),
        },),

    )
    search_fields = (
        'name',
        'title',
        'is_active',
        'description',
    )

# Register your models here.
admin.site.register(Share, ShareAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Custom, CustomAdmin)
admin.site.register(Video)
