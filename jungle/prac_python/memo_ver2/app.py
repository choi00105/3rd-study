from flask import Flask, render_template, jsonify, request

from pymongo import MongoClient

app = Flask(__name__)

# 로컬에선 되는데 우분투에서 안됨요 ㅠㅠ
# client = MongoClient('localhost', 27017)

client = MongoClient('mongodb://test:test@3.38.166.202',27017)

db = client.dbjungle 


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/memo', methods=['POST'])
def post_memo():
    title_receive = request.form['title_give']
    text_receive = request.form['text_give']

    memo = {'title': title_receive, 'text': text_receive, 'like': 0,}

    before = list(db.memos.find({}, {'_id': 0}))

    for i in before:
        print(i['title'])
        if str(title_receive)==str(i['title']):
            return jsonify({'result': 'error'})
        
    
    db.memos.insert_one(memo)
    
    return jsonify({'result': 'success'})



@app.route('/memo', methods=['GET'])
def read_memos():
    result = list(db.memos.find({}, {'_id': 0}).sort('like',-1))
    return jsonify({'result': 'success', 'memos': result})

@app.route('/memo/like',methods=['POST'])
def like_memo():
    title_receive = request.form['title_give']
    
    memo = db.memos.find_one({'title': title_receive})
    new_like = memo['like'] + 1

    db.memos.update_one({'title':title_receive},{'$set':{'like':new_like}})

    return jsonify({'result': 'success'})

@app.route('/memo/delete', methods=['POST'])
def delete_memo():
    title_receive = request.form['title_give']
    db.memos.delete_one({'title': title_receive})
    
    return jsonify({'result': 'success'})

@app.route('/memo/edit', methods=['POST'])
def edit_memo():
  find_receive = request.form['find_give']
  title_receive = request.form['title_give']
  text_receive = request.form['text_give']

  db.memos.update_one({'title':find_receive},{'$set':{'title':title_receive, 'text':text_receive}})
  
  return jsonify({'result':'success'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)