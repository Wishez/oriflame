# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-19 11:54
from __future__ import unicode_literals

import colorfield.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_auto_20171119_1253'),
    ]

    operations = [
        migrations.AddField(
            model_name='custom',
            name='menu_link_color',
            field=colorfield.fields.ColorField(blank=True, max_length=18, null=True, verbose_name='Цвет ссылок меню'),
        ),
    ]