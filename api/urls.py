from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='Routes'),
    path('notes/', views.getNotes, name='notes'),
]
