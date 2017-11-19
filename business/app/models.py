# -*- encoding: utf-8 -*-
from django.db import models
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.utils import timezone
from colorful.fields import RGBColorField
from django.db.models.signals import pre_save
from colorfield.fields import ColorField
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



class Custom(models.Model):
    name = models.CharField(
        _('Имя настройки'),
        max_length = 100
    )
    widgets = models.TextField(
        _('Матрики, виджеты и прочее'),
        max_length=8196,
        blank=True,
        null=True
    )
    description = models.TextField(
        _('META описание сайта'),
        max_length=300,
        blank=True,
        null=True
    )
    title = models.CharField(
        _('Заголовок сайта'),
        max_length = 90,
        blank = True,
        null = True
    )

    address = models.CharField(
        _('Адрес'),
        max_length=200,
        blank=True,
        null=True
    )
    addressHref = models.CharField(
        _('Ссылка перенаправляющая на карты(Google/Yandex)'),
        max_length=500,
        blank=True,
        null=True
    )
    email = models.CharField(
        _('Email'),
        max_length=200,
        blank=True,
        null=True
    )
    phone = models.CharField(
        _('Телефон'),
        max_length=90,
        blank=True,
        null=True
    )
    checkbox_field_color = ColorField(_('Цвет текста чекбокса регистрации'), blank = True,
        null = True)
    checkbox_field_bg = ColorField(_('Цвет фона блока чекбокса регистрации'), blank = True,
        null = True)
    default_link_color = ColorField(_('Стандартный цвет ссылок'), blank = True,
        null = True)
    default_link_hover_color = ColorField(_('Стандартный цвет ссылок при наведении'), blank = True,
        null = True)
    menu_link_color = ColorField(_('Цвет ссылок меню'), blank = True,
        null = True)
    menu_link_hover_color = ColorField(_('Цвет ссылок меню при наведении'), blank = True,
        null = True)
    menu_link_active_color = ColorField(_('Цвет шрифта активной ссылки'), blank=True,
                                    null=True)
    menu_link_hover_bg = ColorField(_('Цвет фона ссылок при наведении'), blank = True,
        null = True)
    default_color = ColorField(_('Цвет шрифта по умолчанию'), blank = True,
        null = True)
    default_bg = ColorField(_('Фон сайта'), blank = True,
        null = True)
    header_color = ColorField(_('Цвет шрифта верхней части страницы'), blank = True,
        null = True)
    header_bg = ColorField(_('Цвет фона верхней части страницы'), blank = True,
        null = True)
    footer_color = ColorField(_('Цвет шрифта нижней части страницы'), blank = True,
        null = True)
    footer_bg = ColorField(_('Цвет фона нижней части страницы'), blank = True,
        null = True)
    slider_buttons_color = ColorField(_('Цвет шрифта кнопок слайдера'), blank = True,
        null = True)
    slider_buttons_bg = ColorField(_('Цвет фона кнопок слайдера'), blank = True,
        null = True)
    button_bg = ColorField(_('Цвет фона кнопок сайта'), blank = True,
        null = True)
    button_hover_bg = ColorField(_('Цвет фона кнопок при наведении'), blank = True,
        null = True)
    button_color = ColorField(_('Цвет шрифта кнопок'), blank = True,
        null = True)
    button_hover_color = ColorField(_('Цвет шрифта кнопок при наведении'), blank=True,
                                 null=True)
    headings_color = ColorField(_('Цвет шрифта заголовков'), blank = True,
        null = True)
    open_menu_button_bg = ColorField(_('Цвет фона кнопоки открытия меню'), blank = True,
        null = True)
    open_menu_button_color = ColorField(_('Цвет шрифта кнопоки открытия меню'), blank = True,
        null = True)
    close_menu_button_color = ColorField(_('Цвет шрифта кнопоки закрытия меню'), blank = True,
        null = True)
    preloader_color = ColorField(_('Цвет прелоадера'), blank = True,
        null = True)
    curtain_bg = ColorField(_('Цвет фона предварительной загрузки'), blank=True,
                                 null=True)
    statuses = (
        (_('Не активная'), 'Не активна'),
        (_('Активная'), 'Активная'),
    )
    is_active = models.CharField(
        _('Активация'),
        default=_('Не активна'),
        choices=statuses,
        max_length=12
    )

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = _('Настройка')
        verbose_name_plural = _('Настройки')

from django.db.models.signals import pre_save

def switch_active_custom(sender, instance, **kwargs):
    print('Sender:', sender.objects.all())
    print('Instance:', instance.is_active)
    if instance.is_active == _('Активная'):
        customs = sender.objects.all()
        if len(customs):
            for custom in customs:
                custom.is_active = _('Не активна')
        instance.is_active = _('Активная')

pre_save.connect(switch_active_custom, sender=Custom)

class Video(models.Model):
    name = models.CharField(_('Имя видео'), max_length=150, null=True, blank=True)
    videoId = models.CharField(_('Идентификатор видео'), max_length=50)

    def __str__(self):
        return self.videoId
    class Meta:
        verbose_name = _('Видео')
        verbose_name_plural = _('Видео')