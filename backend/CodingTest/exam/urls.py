from django.urls import path
from . import views

urlpatterns = [
    path('api/last-message/', views.MessageViewSet.as_view({'get': 'snd_last_message'})),
]
