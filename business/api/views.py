# -*- encoding: utf-8 -*-
from rest_framework.viewsets import ReadOnlyModelViewSet
from .serializers import *
# Create your views here.

class SharesViewset(ReadOnlyModelViewSet):
    queryset = Share.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ShareSerializerList
        return ShareSerializer

class VideoViewset(ReadOnlyModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
