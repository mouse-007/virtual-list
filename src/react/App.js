import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
        this.state ={
            showList: [],
            len: 12,
            list: new Array(2000).fill("列表项").map((n,index)=>{
                return {
                    label: n+(index+1),
                    key: index,
                    top: 40*index
                }
            })
        }
        // this.scrollFn.bind(this);
        // this.setShowList.bind(this);
    }
    componentDidMount(){
        this.setShowList(0);
    }
    setShowList=(top=0)=>{
        const { len, list } = this.state;
        let index = Math.floor(top/40);
        index=index-len<0? 0 : index -len;
        this.setState({
            showList: list.slice(index, index + len *3)
        })
    }
    scrollFn=(e)=>{
        this.setShowList(e.target.scrollTop);
    }
    render() {
        const { showList, list }  = this.state;
        return (
            <div>
                <div>react实现方式</div>
                <div className="listBox" onScroll={this.scrollFn}>
                    <div className="nullBox" style={{ height: `${list.length * 40}px` }}></div>
                    <div className="contentBox">
                        {showList.map(item => <div className="list_item" key={item.key} style={{ top: `${item.top}px` }}>{item.label}</div>)}
                    </div>
                </div>
            </div>
        )
    }
} 