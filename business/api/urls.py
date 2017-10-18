# -*- encoding: utf-8 -*-
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'shares', SharesViewset)

urlpatterns = router.urls