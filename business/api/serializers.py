# -*- encoding: utf-8 -*-

from app.models import Share, Video

from rest_framework.serializers import ModelSerializer

class ShareSerializerList(ModelSerializer):
    class Meta:
        model = Share
        fields = (
            'id',
            'title',
            'published_date',
        )


class ShareSerializer(ModelSerializer):
    class Meta:
        model = Share
        fields = (
            'id',
            'title',
            'text',
        )


class VideoSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = (
            'videoId',
            'id',
        )
