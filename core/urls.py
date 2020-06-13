from django.contrib import admin
from django.urls import path
from core import views


app_name = 'core'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('history/', views.history, name="history"),
    path('map/', views.map, name="map"),
    path('contact/', views.contact, name="contact"),
    path('message/', views.message_sent, name="message"),

    ]