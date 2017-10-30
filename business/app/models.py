# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone

if not settings.DEBUG:
    encoding = 'utf-8'
    import sys
    reload(sys)
    sys.setdefaultencoding(encoding)



class Share(models.Model):
    title = models.CharField(max_length=250, verbose_name="Название акции")

    text = models.TextField(
        _('Дополнительный текст'),
        max_length=16384, blank=True, null=True)
    created_date = models.DateTimeField(
        _('Дата создания'),
        default=timezone.now
    )
    image1 = models.ImageField(upload_to='shares/images', blank=True, null=True)
    image2 = models.ImageField(upload_to='shares/images', blank=True, null=True)
    image3 = models.ImageField(upload_to='shares/images', blank=True, null=True)
    image4 = models.ImageField(upload_to='shares/images', blank=True, null=True)
    image5 = models.ImageField(upload_to='shares/images', blank=True, null=True)
    published_date = models.DateTimeField(
        _('Дата публикации'),
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = _('Акция')
        verbose_name_plural = _('Акции')
        ordering = ['-published_date']

    def publish(self):
        self.published_date=timezone.now()
        self.save()

    def __str__(self):
        return self.title


class User(models.Model):

    last_name = models.CharField(verbose_name='Фамилия', max_length=36)
    first_name = models.CharField(verbose_name='Имя', max_length=32)
    middle_name = models.CharField(verbose_name='Отчество', max_length=32, blank=True, null=True)

    birthday = models.DateTimeField(verbose_name='День рождения')
    citizenship = models.BooleanField(default=False, verbose_name='Не гражданин РФ.')
    passport_data = models.CharField(max_length=26, verbose_name='Серия и номер паспорта')
    phone_number = models.CharField(max_length=26, verbose_name='Номер телефона')

    city = models.CharField(verbose_name='Город', max_length=50)
    region = models.CharField(verbose_name='Область', max_length=50, blank=True, null=True)

    street = models.CharField(verbose_name='Улица', max_length=50)
    num_home = models.CharField(verbose_name='Дом' , max_length=5)
    num_apartment = models.DecimalField(verbose_name='Квартира', max_digits=999, decimal_places=1)

    email = models.EmailField(unique=False, verbose_name='E-mail')

    consultant_num = models.CharField(verbose_name='Номер консультанта', max_length=40, blank=True, null=True)

    register_statuses = (
        (_('Новый'), 'Новый'),
        (_('Пустой'), 'Пустой'),
	(_('Зерегистрированный А'), 'Зерегистрированный А'),
	(_('Зерегистрированный Б'), 'Зерегистрированный Б'),
    )

    status = models.CharField(
        max_length=24,
        choices=register_statuses,
        default='Новый',
        verbose_name='Статус регистрации'
    )

    registered_date = models.DateTimeField(blank=True, null=True)

    class Meta:
        verbose_name = _('Консультант')
        verbose_name_plural = _('Консультанты')
        ordering = ['-registered_date']

    def register(self):
        self.registered_date = timezone.now()
        self.save()

    def __str__(self):
        return '%s %s %s | Статус: %s' % (self.last_name, self.first_name, self.middle_name, self.status)


