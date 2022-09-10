from django.contrib import admin
from django.urls import path
from .views import HomeView, HistoryView, ContactView, MapView


app_name = 'core'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', HomeView.as_view(), name="home"),
    path('history/', HistoryView.as_view(), name="history"),
    path('map/', MapView.as_view(), name="map"),
    path('contact/', ContactView.as_view(), name="contact"),
    ]
