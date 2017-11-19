# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-19 08:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_custom'),
    ]

    operations = [
        migrations.AddField(
            model_name='custom',
            name='address',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Адрес'),
        ),
        migrations.AddField(
            model_name='custom',
            name='addressHref',
            field=models.TextField(blank=True, max_length=500, null=True, verbose_name='Адрес'),
        ),
        migrations.AddField(
            model_name='custom',
            name='email',
            field=models.CharField(blank=True, max_length=200, null=True, verbose_name='Email'),
        ),
        migrations.AddField(
            model_name='custom',
            name='phone',
            field=models.CharField(blank=True, max_length=90, null=True, verbose_name='Телефон'),
        ),
    ]
