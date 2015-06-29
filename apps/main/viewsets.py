from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response

from .models import Notice, Comment
from .serializers import NoticeSerializer, CommentSerializer, NoticeDetailSerializer


class NoticeViewSet(viewsets.ModelViewSet):

	queryset = Notice.objects.all()
	serializer_class = NoticeSerializer

	def list(self, request):
		notices = Notice.objects.all()
		notSer = NoticeSerializer(notices, many=True, context={'request': request})
		return Response(notSer.data)

		
	def retrieve(self, request, pk):
		notice = get_object_or_404(Notice, pk=pk)
		notSer = NoticeDetailSerializer(notice, context={'request': request})
		return Response(notSer.data)

class CommentViewSet(viewsets.ModelViewSet):

	queryset = Comment.objects.all()
	serializer_class = CommentSerializer

	def list(self, request, noticia_pk):
		comment = Comment.objects.filter(notice__id = noticia_pk)
		notSer = CommentSerializer(comment, many=True, context={'request': request})
		return Response(notSer.data)

		
	def retrieve(self, request, noticia_pk, pk):
		comment = get_object_or_404(Comment, pk=pk)
		notSer = CommentSerializer(comment, context={'request': request})
		return Response(notSer.data)

