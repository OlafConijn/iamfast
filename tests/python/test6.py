import boto3
import boto3 as somethingelse
from boto3.session import Session
from boto3 import session as sessionroot

session = Session()
s3 = session.resource('s3')

s3.buckets.all()

s3.create_bucket(Bucket='yourbucket1')

your_bucket = s3.Bucket('yourbucket2')
your_bucket.create()

your_bucket_6 = s3.Bucket('yourbucket3')
your_bucket_6.create(ACL='private').keys()

for s3_file in your_bucket.objects.all():
    print(s3_file.key)

s32 = boto3.resource('s3')

your_bucket2 = s32.Bucket('yourbucket4')
your_bucket2.objects.all()

session2 = boto3.Session()
s33 = session2.client('s3')
s33.list_objects(Bucket='yourbucket5')
