from django.shortcuts import render, redirect, HttpResponse
from django.urls import reverse
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
        "courses" : "Welcome to the Test",
        # "descriptions" : Description.objects.all()
    }
    return render(request, 'map/index.html', context)
def home(request):
    return render(request, 'map/home.json')
def rent(request):
    return render(request, 'map/rent.json')
def condo(request):
    return render(request, 'map/condo.json')
