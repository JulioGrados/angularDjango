from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Notice, Comment, Category, Author

class UserSerializer(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = User
		fields = ('username',)

class CategorySerializer(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = Category
		fields = ('name',)

class AuthorSerializer(serializers.HyperlinkedModelSerializer):

	class Meta:
		model = Author
		fields = ('name',)


class NoticeSerializer(serializers.ModelSerializer):

	category = CategorySerializer()

	class Meta:
		model = Notice
		fields = ('id', 'title', 'resumen', 'main', 'image', 'category')

class NoticeDetailSerializer(serializers.ModelSerializer):

	category = CategorySerializer()
	author = AuthorSerializer()

	class Meta:
		model = Notice

class CommentSerializer(serializers.ModelSerializer):

	class Meta:
		model = Comment