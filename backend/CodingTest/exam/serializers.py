from rest_framework import serializers
from .models import Message
from django.utils import timezone


class DateTimeFieldTZone(serializers.DateTimeField):
    """
    extending serializer to output a timezone with time stamp
    """

    def to_tz_representation(self, value):
        value = timezone.localtime(value)
        return super(DateTimeFieldTZone, self).to_representation(value)


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('message', 'created_at')

    created_at = DateTimeFieldTZone(format='%Y-%m-%d %H:%M')
