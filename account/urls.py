from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name="home"),
    path('Signup/',views.homepage, name ="signup"),

]
