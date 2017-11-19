# -*- encoding: utf-8 -*-
from django.shortcuts import render
from .models import User, Custom
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def index(request):
    custom = Custom.objects.filter(is_active='Активная')

    return render(
        request,
        'index.html',
        {
            "custom": custom[0]
        }
    )


@csrf_exempt
def register(request):
    if request.method == "POST":
        user_data = request.POST

        extracted_data = {}

        for key in user_data:
        	extracted_data[key] = user_data[key]


        print(extracted_data)
        user = User.objects.create(**extracted_data)
        user.register()

        return HttpResponse('Вы успешно прошли регистрацию')
    return HttpResponse('')