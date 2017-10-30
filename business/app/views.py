# -*- encoding: utf-8 -*-
from django.shortcuts import render
from .models import User
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def index(request):
    return render(
        request,
        'index.html',
        {}
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