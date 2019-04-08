from rest_framework import viewsets
from rest_framework.response import Response
from .models import Message
from .serializers import MessageSerializer


class MessageViewSet(viewsets.ModelViewSet):
    """
    Api endpoint allows viewing messages
    """
    queryset = Message.objects.all().order_by('-created_at')

    def snd_last_message(self, request):
        queryset = self.get_queryset()[1]
        serializer = MessageSerializer(queryset)
        return Response(serializer.data)

