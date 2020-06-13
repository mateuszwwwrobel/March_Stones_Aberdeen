from django.shortcuts import render

# Create your views here.



def home(request):
    return render(request, 'index.html')

def resume(request):
    return render(request, 'resume.html')

def portfolio(request):
    return render(request, 'portfolio.html')

def contact(request):
    return render(request, 'contact.html')

def message_sent(request):
    return render(request, 'message.html')
