from django.db import models

# Create your models here.


class Note(models.Model):
    body= models.TextField(null=True, blank =True)
    updated =models.DateTimeField(auto_now=True) #this is for updated note i.e. everytime we update note, time changes accordingly
    created = models.DateTimeField(auto_now_add=True) #this is the first time we create a note

    def __str__(self):
        return self.body[0:200]