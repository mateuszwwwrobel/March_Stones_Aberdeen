from django.shortcuts import render
from django.conf import settings
from django.views.generic import TemplateView, View


class HomeView(TemplateView):
    template_name = 'index.html'


class HistoryView(TemplateView):
    template_name = 'history.html'


class ContactView(TemplateView):
    template_name = 'contact.html'


class MapView(View):
    def get(self, request):
        context = {'api_key': settings.GOOGLE_MAP_API_KEY,}
        return render(request, 'map.html', context)
