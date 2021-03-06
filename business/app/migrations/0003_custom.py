# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-19 08:15
from __future__ import unicode_literals

import colorful.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20171030_2004'),
    ]

    operations = [
        migrations.CreateModel(
            name='Custom',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Имя настройки')),
                ('widgets', models.TextField(blank=True, max_length=8196, null=True, verbose_name='Матрики, виджеты и прочее')),
                ('description', models.TextField(blank=True, max_length=300, null=True, verbose_name='META описание сайта')),
                ('title', models.CharField(blank=True, max_length=90, null=True, verbose_name='Заголовок сайта')),
                ('checkbox_field_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет текста чекбокса регистрации')),
                ('checkbox_field_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет фона блока чекбокса регистрации')),
                ('default_link_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Стандартный цвет ссылок')),
                ('default_link_hover_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Стандартный цвет ссылок при наведении')),
                ('menu_link_hover_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет ссылок меню при наведении')),
                ('menu_link_hover_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет фона ссылок при наведении')),
                ('default_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта по умолчанию')),
                ('default_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Фон сайта')),
                ('header_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта верхней части страницы')),
                ('header_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет фона верхней части страницы')),
                ('footer_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта нижней части страницы')),
                ('footer_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет фона нижней части страницы')),
                ('slider_buttons_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта кнопок сладера')),
                ('slider_buttons_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет фона кнопок сладера')),
                ('button_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет фона кнопок сайта')),
                ('button_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта кнопок сладера')),
                ('headings_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта заголовков')),
                ('open_menu_button_bg', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет фона кнопоки открытия меню')),
                ('open_menu_button_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта кнопоки открытия меню')),
                ('close_menu_button_color', colorful.fields.RGBColorField(blank=True, null=True, verbose_name='Цвет шрифта кнопоки закрытия меню')),
                ('is_active', models.CharField(choices=[('Не активная', 'Не активна'), ('Активная', 'Активная')], default='Не активна', max_length=12, verbose_name='Активация')),
            ],
            options={
                'verbose_name': 'Настройка',
                'verbose_name_plural': 'Настройки',
            },
        ),
    ]
