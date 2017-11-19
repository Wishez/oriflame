# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-19 14:26
from __future__ import unicode_literals

import colorfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0014_auto_20171119_1724'),
    ]

    operations = [
        migrations.AlterField(
            model_name='custom',
            name='menu_link_active_color',
            field=colorfield.fields.ColorField(blank=True, max_length=18, null=True, verbose_name='Цвет шрифактивной ссылки'),
        ),
        migrations.AlterField(
            model_name='video',
            name='videoId',
            field=models.CharField(default=None, max_length=50, verbose_name='Идентификатор видео'),
        ),
    ]
